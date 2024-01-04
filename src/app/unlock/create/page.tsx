// client component 指令
"use client"
import React from "react";
const ethers = require("ethers");
const { Web3Service } = require("@unlock-protocol/unlock-js");
import { polygon,mainnet } from '@unlock-protocol/networks'
// import {mainnet, polygon} from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'

import {createConfig, useContractRead, WagmiConfig} from 'wagmi'
import unlockAbi from "../../../lib/unlockabi.json"
import { publicProvider } from 'wagmi/providers/public'
import {Chain, configureChains } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'


const { publicClient, webSocketPublicClient }  = configureChains(
    [mainnet, polygon],
    [
        jsonRpcProvider({
            rpc: (chain) => ({
                http: `https://rpc.unlock-protocol.com/${chain.id}`,
            }),
        }),
    ],
)


const config = createConfig({
    publicClient,
    webSocketPublicClient,
})


const UnlockCreateEvents:React.FC = ()=> {


    console.log(config);


    // test polygon



    const { data, isError, isLoading } = useContractRead({
        address: "0x32",
        abi: unlockAbi,
        functionName: 'getHunger',
    })


    console.log(data);
    const handleCreate = () => {
        console.log("handleCreate");
    };
    return (
        <WagmiConfig config={config}>
        <div>
            Unlock CreateEvent ??
            <div onClick={handleCreate}>
                Create Event
            </div>
        </div>
        </WagmiConfig>
    )

}

export default UnlockCreateEvents;