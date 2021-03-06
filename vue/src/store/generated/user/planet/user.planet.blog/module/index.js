// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const types = [
    ["/user.planet.blog.MsgCreatePost", MsgCreatePost],
    ["/user.planet.blog.MsgSendIbcPost", MsgSendIbcPost],
    ["/user.planet.blog.MsgCreateTimedoutPost", MsgCreateTimedoutPost],
    ["/user.planet.blog.MsgDeleteTimedoutPost", MsgDeleteTimedoutPost],
    ["/user.planet.blog.MsgCreateSentPost", MsgCreateSentPost],
    ["/user.planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
    ["/user.planet.blog.MsgDeletePost", MsgDeletePost],
    ["/user.planet.blog.MsgUpdatePost", MsgUpdatePost],
    ["/user.planet.blog.MsgUpdateTimedoutPost", MsgUpdateTimedoutPost],
    ["/user.planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgCreatePost: (data) => ({ typeUrl: "/user.planet.blog.MsgCreatePost", value: data }),
        msgSendIbcPost: (data) => ({ typeUrl: "/user.planet.blog.MsgSendIbcPost", value: data }),
        msgCreateTimedoutPost: (data) => ({ typeUrl: "/user.planet.blog.MsgCreateTimedoutPost", value: data }),
        msgDeleteTimedoutPost: (data) => ({ typeUrl: "/user.planet.blog.MsgDeleteTimedoutPost", value: data }),
        msgCreateSentPost: (data) => ({ typeUrl: "/user.planet.blog.MsgCreateSentPost", value: data }),
        msgUpdateSentPost: (data) => ({ typeUrl: "/user.planet.blog.MsgUpdateSentPost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/user.planet.blog.MsgDeletePost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/user.planet.blog.MsgUpdatePost", value: data }),
        msgUpdateTimedoutPost: (data) => ({ typeUrl: "/user.planet.blog.MsgUpdateTimedoutPost", value: data }),
        msgDeleteSentPost: (data) => ({ typeUrl: "/user.planet.blog.MsgDeleteSentPost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
