import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgSendIbcPost } from "./types/blog/tx";
import { MsgCreateTimedoutPost } from "./types/blog/tx";
import { MsgDeleteTimedoutPost } from "./types/blog/tx";
import { MsgCreateSentPost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";
import { MsgDeletePost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgUpdateTimedoutPost } from "./types/blog/tx";
import { MsgDeleteSentPost } from "./types/blog/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgSendIbcPost: (data: MsgSendIbcPost) => EncodeObject;
    msgCreateTimedoutPost: (data: MsgCreateTimedoutPost) => EncodeObject;
    msgDeleteTimedoutPost: (data: MsgDeleteTimedoutPost) => EncodeObject;
    msgCreateSentPost: (data: MsgCreateSentPost) => EncodeObject;
    msgUpdateSentPost: (data: MsgUpdateSentPost) => EncodeObject;
    msgDeletePost: (data: MsgDeletePost) => EncodeObject;
    msgUpdatePost: (data: MsgUpdatePost) => EncodeObject;
    msgUpdateTimedoutPost: (data: MsgUpdateTimedoutPost) => EncodeObject;
    msgDeleteSentPost: (data: MsgDeleteSentPost) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
