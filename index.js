const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
fetch("https://panel.godlike.host/api/client/servers/64813c9d-3f82-40b1-b8ce-c23cebe80587/addtime", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en,en-US;q=0.9,fr-FR;q=0.8,fr;q=0.7",
    "baggage": "sentry-environment=production,sentry-release=18f1c4d6347,sentry-public_key=de91bf37aa4bb6031dd0d6311612aac0,sentry-trace_id=1f4cd14daffb48c59774ac1b76a2c087",
    "sec-ch-ua": "\"Opera\";v=\"109\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sentry-trace": "1f4cd14daffb48c59774ac1b76a2c087-ac23f8e2c002737b",
    "x-requested-with": "XMLHttpRequest",
    "x-xsrf-token": "eyJpdiI6ImZOakxHeWtzZzRpSDZFNE96VFk4cmc9PSIsInZhbHVlIjoiR2ZESWxKb2RUNDNrLytPcGo0eUZpL3VJbm05U3FyOGU4VVhvZkVNU3d0R2MzNGNJNXZNNFlkTk5PM3d3M2tqRmRYVXZWWncxMGZxV0lGR2FBZWVGd3BNN1lpYzRHY2VuaDlaUkdla21GdnV2VE9tUFZXYVZjeURWWHZFYXlwcFkiLCJtYWMiOiI4NTk0Y2Y5YThlYWE1ZDI1MjBiM2QwYzY5NTJjNGM3YzIzOTc4NDEyODJlODM5Y2ExZjUwODFhYmQ5NGE4OTZjIiwidGFnIjoiIn0=",
    "cookie": "_gcl_au=1.1.1261889906.1714340756; sbjs_migrations=1418474375998%3D1; sbjs_current_add=fd%3D2024-04-28%2022%3A45%3A58%7C%7C%7Cep%3Dhttps%3A%2F%2Fgodlike.host%2F%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F; sbjs_first_add=fd%3D2024-04-28%2022%3A45%3A58%7C%7C%7Cep%3Dhttps%3A%2F%2Fgodlike.host%2F%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F; sbjs_current=typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29; sbjs_first=typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ik5QOG1sUER0S2RCQ2pXNjUxNTBsSFE9PSIsInZhbHVlIjoia294R1RrT2NFNzU0T3Ivb1JqNFF1cXAybjM2QTN2WUloZWFUWWV4MjhlajlKd2ROTTU2ZEJ5ZmJkMjJHZEVleHV5Ly9ZMmgzeElEakJBQU9McCtreHdGeUhlZGtJSDF4R1Jaeks0d3J0WEpYYUZWRkFOZnErSFdVRlJNdDBzRDY5VitrR2t1UWQ3cGdFbWcyd1NuekYvTjZ3bWhjcEtka1RRWWVRK0VxNXdSTFRZSldtb2h2UDYxNDRWQ0hKRXl4THVkVTV3NDFWMkN5RDMvc3ZQdDZrOEpGUFpudjhya2NiamthVlpnOXZ0VT0iLCJtYWMiOiJhMDBkZGQ2NTZkYjM0ZWY4YWJkMTFlZWQwZTEyMThiN2RmZTJhMjNhYjJhN2ZiMmUwNDdiMjljOTY2NTJmM2I2IiwidGFnIjoiIn0%3D; _pubcid=8df35dc1-54e5-4008-b641-358dd06d211e; _pubcid_cst=zix7LPQsHA%3D%3D; _cc_id=3a9209ca310ae5a3d7bf4d52fe907a29; panoramaId_expiry=1714949777934; panoramaId=cb4910159dcaa5039ed4d76d1180185ca02c58341b5fb0ee540e74c19d7557c6; panoramaIdType=panoDevice; _au_1d=AU1D-0100-001714344992-08B70ETT-RTTZ; _gid=GA1.2.1914896047.1714344998; _ga_BZ5WW4P6JQ=GS1.1.1714350027.2.0.1714350027.60.0.0; _ga=GA1.1.2088493704.1714340758; sbjs_udata=vst%3D2%7C%7C%7Cuip%3D%28none%29%7C%7C%7Cuag%3DMozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F123.0.0.0%20Safari%2F537.36%20OPR%2F109.0.0.0; XSRF-TOKEN=eyJpdiI6ImZOakxHeWtzZzRpSDZFNE96VFk4cmc9PSIsInZhbHVlIjoiR2ZESWxKb2RUNDNrLytPcGo0eUZpL3VJbm05U3FyOGU4VVhvZkVNU3d0R2MzNGNJNXZNNFlkTk5PM3d3M2tqRmRYVXZWWncxMGZxV0lGR2FBZWVGd3BNN1lpYzRHY2VuaDlaUkdla21GdnV2VE9tUFZXYVZjeURWWHZFYXlwcFkiLCJtYWMiOiI4NTk0Y2Y5YThlYWE1ZDI1MjBiM2QwYzY5NTJjNGM3YzIzOTc4NDEyODJlODM5Y2ExZjUwODFhYmQ5NGE4OTZjIiwidGFnIjoiIn0%3D; pterodactyl_session=eyJpdiI6InVMN1BIeDNoZUZra0lIY1hsUkYwUFE9PSIsInZhbHVlIjoibzhkNFpuV2orRHo2UlRLMSszaFhDN2pVdzhUNy9VRkhUWVRwblhaMy96NjJaNGxPVVp5cDdLeVRGMUUzbFdYTVg0ZSs4a3hZSUVDZW4xSCtVUDdUVDdJd0JiVFRrcGxnanFYaXRhNHFpS2JGTnBESUduL0EyTmZmU1B4NUpEWEMiLCJtYWMiOiIzMmMxNWFlOTkyZGE2ZmNiZWQxOGM3YmQ1MTMwYjliYWEwMjQ1Njk3NzkxNzliNDY2OGM0YTAyZWIzNjVlMWVjIiwidGFnIjoiIn0%3D; _ga_ZY3JHEM3YX=GS1.1.1714341617.1.1.1714350922.60.0.1978083784",
    "Referer": "https://panel.godlike.host/server/64813c9d/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "POST"
}).then(async (v)=>{console.log(await v.text())}).catch((e)=>console.log)
