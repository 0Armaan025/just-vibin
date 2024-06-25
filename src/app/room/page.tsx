"use client";
import * as React from "react";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function generateToken(tokenServerUrl: any, userID: any) {
  return fetch(
    `${tokenServerUrl}/access_token?userID=${userID}&expired_ts=7200`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
}

function randomID(len: any) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url: string = window.location.href
): URLSearchParams {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const roomID = getUrlParams().get("roomID") || randomID(5);
  const userID = randomID(5);
  const userName = randomID(5);
  let role_str = getUrlParams(window.location.href).get("role") || "Host";
  const role =
    role_str === "Host"
      ? ZegoUIKitPrebuilt.Host
      : role_str === "Cohost"
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [] as any;
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: "Join as co-host",
      url:
        window.location.origin +
        window.location.pathname +
        "?roomID=" +
        roomID +
        "&role=Cohost",
    });
  }
  sharedLinks.push({
    name: "Join as audience",
    url:
      window.location.origin +
      window.location.pathname +
      "?roomID=" +
      roomID +
      "&role=Audience",
  });
  let myMeeting = async (element: HTMLDivElement) => {
    generateToken(
      "https://nextjs-token-7berndqqr-choui666.vercel.app/api",
      userID
    ).then((res) => {
      const token = ZegoUIKitPrebuilt.generateKitTokenForProduction(
        1484647939,
        res.token,
        roomID,
        userID,
        userName
      );
      // create instance object from token
      const zp = ZegoUIKitPrebuilt.create(token);

      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          config: {
            role,
          },
        },
        sharedLinks,
      });
    });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting as any}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}
