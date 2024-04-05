import { HydrateFlavor } from '@grammyjs/hydrate';
import { Context } from 'grammy';

export interface BotConfig {
  botDeveloper: number;
  isDeveloper: boolean;
}
export type botContextType = HydrateFlavor<Context> & {
  config: BotConfig;
};
