import { BaseAsset, ApplyAssetContext, ValidateAssetContext } from 'lisk-sdk';

export class HelloblockchainAsset extends BaseAsset {
	public name = 'helloblockchain';
  public id = 0;

  // Define schema for asset
	public schema = {
    $id: 'helloblockchain/helloblockchain-asset',
		title: 'HelloblockchainAsset transaction asset for helloblockchain module',
		type: 'object',
		required: ["helloString"],
		properties: {
			helloString: {
				dataType: 'string', 
				fieldNumber: 1, 
				minLength: 3, 
				maxLength: 64,
			},
		}
  };

  public validate({ asset }: ValidateAssetContext<{}>): void {
    if (asset.helloString === "FUCK") {
		throw new Error(
			'Illegal hello message: no cursing allowed'
		);
	}
  }

	// eslint-disable-next-line @typescript-eslint/require-await
  public async apply({ asset, transaction, stateStore }: ApplyAssetContext<{}>): Promise<void> {
		throw new Error('Asset "helloblockchain" apply hook is not implemented.');
	}
}
