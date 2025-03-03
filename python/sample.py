import numpy as np
import matplotlib.pyplot as plt
from scipy.linalg import pinv
from scipy.signal import convolve

# Parameters
Nsub = 64         # Number of OFDM subcarriers
Ncp = 16          # Cyclic prefix length
M = 4             # QPSK modulation (M=4)
Nsymbols = 1000   # Number of symbols per subcarrier
SNRdB = np.arange(0, 31, 5)  # SNR range (0 to 30 dB)
Ntx = 2           # Number of transmit antennas
Nrx = 2           # Number of receive antennas

# QPSK Modulation Function
def qpsk_mod(data):
    return (2 * (data // 2) - 1) + 1j * (2 * (data % 2) - 1)

# QPSK Demodulation Function
def qpsk_demod(symbols):
    return ((symbols.real > 0).astype(int) * 2 + (symbols.imag > 0).astype(int))

# Transmitter
data = np.random.randint(0, M, (Nsub, Nsymbols))  # Random QPSK symbols
modData = qpsk_mod(data)  # QPSK Modulation

# OFDM Modulation (IFFT)
txOFDM = np.fft.ifft(modData, Nsub, axis=0)

# Add Cyclic Prefix
txOFDM_cp = np.vstack((txOFDM[-Ncp:, :], txOFDM))

# MIMO Channel (Rayleigh Fading)
H = (np.random.randn(Nrx, Ntx) + 1j * np.random.randn(Nrx, Ntx)) / np.sqrt(2)
txOFDM_cp = txOFDM_cp[:Ntx, :]  # Select first Ntx (2) rows
rxSignal = H @ txOFDM_cp  # Now dimensions match: (2,2) x (2,1000)

# BER Calculation
BER = []

for snr in SNRdB:
    noise_power = 10 ** (-snr / 10)
    noise = np.sqrt(noise_power / 2) * (np.random.randn(*rxSignal.shape) + 1j * np.random.randn(*rxSignal.shape))
    rxNoisy = rxSignal + noise

    # Zero-Forcing Equalization
    H_inv = pinv(H)  
    rxEqualized = H_inv @ rxNoisy

    # Remove Cyclic Prefix
    rxOFDM = rxEqualized[Ncp:, :]

    # OFDM Demodulation (FFT)
    rxSymbols = np.fft.fft(rxOFDM, Nsub, axis=0)

    # QPSK Demodulation
    rxData = qpsk_demod(rxSymbols)

    # Compute BER
    errors = np.sum(rxData != data)
    BER.append(errors / np.prod(data.shape))

# Plot BER vs SNR
plt.semilogy(SNRdB, BER, 'ro-', label='QPSK over 2x2 MIMO Rayleigh')
plt.grid(True)
plt.xlabel('SNR (dB)')
plt.ylabel('Bit Error Rate (BER)')
plt.title('BER vs SNR for 2×2 MIMO-OFDM')
plt.legend()
plt.show()