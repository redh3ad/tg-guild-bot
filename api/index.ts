require('../src/index');

import { webhookCallback } from 'grammy';
import bot from '../src/bot';

export default webhookCallback(bot, 'std/http');
