import styles from "./styles.module.css";

import { IAsset } from "@/app/types";

import { MenuIcon } from "@/app/components/Icons/MenuIcon";
import { CloseIcon } from "@/app/components/Icons/CloseIcon";
import { ArrowRightIcon } from "@/app/components/Icons/ArrowRightIcon";
import { YoutubeIcon } from "@/app/components/Icons/YoutubeIcon";
import { TwitterIcon } from "@/app/components/Icons/TwitterIcon";
import { TwitchIcon } from "@/app/components/Icons/TwitchIcon";
import { NostrIcon } from "@/app/components/Icons/NostrIcon";
import { TikTokIcon } from "@/app/components/Icons/TikTokIcon";
import { DiscordIcon } from "@/app/components/Icons/DiscordIcon";

const renderAssetByName = (name: string, color: string) => {
  switch (name) {
    case "menu":
      return <MenuIcon color={color} />;
    case "close":
      return <CloseIcon color={color} />;
    case "arrow-right":
      return <ArrowRightIcon color={color} />;
    case "youtube":
      return <YoutubeIcon color={color} />;
    case "tiktok":
      return <TikTokIcon color={color} />;
    case "twitter":
      return <TwitterIcon color={color} />;
    case "twitch":
      return <TwitchIcon color={color} />;
    case "nostr":
      return <NostrIcon color={color} />;
    case "discord":
      return <DiscordIcon color={color} />;
    default:
      return null;
  }
};

const Asset = (props: IAsset) => {
  const { name, size, color } = props;

  return (
    <div className={styles.asset} style={{ width: size, height: size }}>
      {renderAssetByName(name, color)}
    </div>
  );
};

export default Asset;
