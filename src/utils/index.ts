export const twVersions = ["v4.1", "v3.4.17", "v2.2.16", "v1.9.0", "v0.7.4"];

export async function loadTwJson(version: string) {    
    const res = await fetch(`/tailwind-cheatsheet/twjson/${version}.json`);
    const data = await res.json();
    return data;
}