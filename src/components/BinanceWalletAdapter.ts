import { WalletAdapterNetwork, WalletAdapter, WalletReadyState, WalletName, WalletAdapterEvents } from '@solana/wallet-adapter-base';
import { PublicKey, Transaction, Connection, SendOptions } from '@solana/web3.js';
import { EventEmitter } from 'events';

const BINANCE_WALLET_NAME = 'Binance Wallet' as WalletName<'Binance Wallet'>;

export class BinanceWalletAdapter extends EventEmitter implements WalletAdapter {
  name = BINANCE_WALLET_NAME;
  url = 'https://www.binance.com/en/wallet';
  icon = 'https://assets.binance.com/static/files/binance-wallet-logo.png';
  supportedTransactionVersions = null;

  private _connecting = false;
  private _publicKey: PublicKey | null = null;
  private _readyState: WalletReadyState = WalletReadyState.Installed;

  get connecting() {
    return this._connecting;
  }

  get connected() {
    return !!this._publicKey;
  }

  get readyState() {
    return this._readyState;
  }

  get publicKey() {
    return this._publicKey;
  }

  async autoConnect(): Promise<void> {
    // Not implemented for Binance Wallet
    return;
  }

  async connect(): Promise<void> {
    try {
      this._connecting = true;
      this.emit('connecting' as keyof WalletAdapterEvents);

      // Check if Binance Wallet is available
      if (!(window as any).BinanceChain) {
        throw new Error('Binance Wallet not found. Please install Binance Wallet extension.');
      }

      // For now, show that connection is attempted but signing isn't implemented
      alert('Binance Wallet detected! However, full Solana transaction signing is not yet implemented. Please use Phantom, Solflare, or another supported wallet for now.');

      // Don't actually connect since signing isn't implemented
      this.emit('error' as keyof WalletAdapterEvents, new Error('Binance Wallet integration is not fully implemented. Please use a different wallet.'));
      throw new Error('Binance Wallet integration is not fully implemented. Please use a different wallet.');
    } catch (error) {
      this.emit('error' as keyof WalletAdapterEvents, error as Error);
      throw error;
    } finally {
      this._connecting = false;
    }
  }

  async disconnect(): Promise<void> {
    this._publicKey = null;
    this.emit('disconnect' as keyof WalletAdapterEvents);
  }

  async sendTransaction(
    transaction: Transaction,
    connection: Connection,
    options: SendOptions = {}
  ): Promise<string> {
    throw new Error('Send transaction not implemented for Binance Wallet. Please use a different wallet.');
  }

  async signTransaction(transaction: Transaction): Promise<Transaction> {
    throw new Error('Sign transaction not implemented for Binance Wallet. Please use a different wallet.');
  }

  async signAllTransactions(transactions: Transaction[]): Promise<Transaction[]> {
    throw new Error('Sign all transactions not implemented for Binance Wallet. Please use a different wallet.');
  }

  async signMessage(message: Uint8Array): Promise<Uint8Array> {
    throw new Error('Sign message not implemented for Binance Wallet. Please use a different wallet.');
  }
}