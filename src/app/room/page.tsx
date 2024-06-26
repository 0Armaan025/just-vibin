"use client";
import * as React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function generateToken(tokenServerUrl: any, userID: any, roomID: any) {
  return fetch(
    `${tokenServerUrl}/access_token?userID=${userID}&expired_ts=7200&roomID=${roomID}`,
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

export default function App() {
  const urlParams = new URL(window.location.href).searchParams;
  const roomID = urlParams.get("roomID") || randomID(5);
  const userID = randomID(5);
  const userName = `userName${userID}`;
  const role_str = urlParams.get("role") || "Host";
  const role =
    role_str === "Host"
      ? ZegoUIKitPrebuilt.Host
      : role_str === "Cohost"
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  const sharedLinks: any = [];
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

  React.useEffect(() => {
    const appID = 458756801;
    const serverSecret = "b99e74c801e74c6e9f22ef22cee2b604";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
      appID,
      serverSecret,
      roomID,
      userID,
      userName
    );

    generateToken(
      "https://nextjs-token-7berndqqr-choui666.vercel.app/api",
      userID,
      roomID
    ).then((res) => {
      const token = ZegoUIKitPrebuilt.generateKitTokenForProduction(
        1484647939,
        res.token,
        roomID,
        userID,
        userName
      );

      const zp = ZegoUIKitPrebuilt.create(token);
      zp.joinRoom({
        container: document.getElementById("myCallContainer"),
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          config: {
            role,
          },
        },
        sharedLinks,
      });
    });
  }, [roomID, userID, userName, role, sharedLinks]);

  return (
    <div
      id="myCallContainer"
      className="myCallContainer"
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}
