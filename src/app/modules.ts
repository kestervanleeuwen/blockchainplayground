/* eslint-disable @typescript-eslint/no-empty-function */
import { Application } from 'lisk-sdk';
import { HelloblockchainModule } from "./modules/helloblockchain/helloblockchain_module";

// @ts-expect-error Unused variable error happens here until at least one module is registered
export const registerModules = (_app: Application): void => {

    _app.registerModule(HelloblockchainModule);
};
