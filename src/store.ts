import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import * as config from '$lib/conf.ts';

const defaultValue = config.pageLinks[0].name;
export const activePage: Writable<string> = writable(defaultValue);
