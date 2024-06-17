import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({url}) => {
    const payload = url.searchParams.get('id')
    if (! payload) {
        throw redirect(308, '/')
    }

    if (payload.substring(0, 5) !== 'eGxC.') {
        throw redirect(308, '/')
    }

    if (payload.substring(payload.length - 6) !== 'i0pk==') {
        throw redirect(308, '/')
    }
}) satisfies PageServerLoad;