var request = require("request");

var options = { method: 'POST',
  url: 'https://www.btcchina.com/api.php/trade',
  headers:
  { 'postman-token': '42e504dd-b4ac-4dc0-51ad-d68aebfa26d2',
    'cache-control': 'no-cache',
    'x-wf-max-combined-size': '261120',
    'x-firephp-version': '0.0.6',
    cookie: 'visid_incap_88065=iMHyS9roTHGUtcTOTXES6MnQZFkAAAAAQUIPAAAAAABISYI7sv7tbDR4y/sG2hTT; Hm_lvt_b9b98533bd6087a97f28dc64517262c7=1499779278,1499903231; nlbi_88065=pQ/0fg+VVBKCpwRWiCcYBwAAAADQZ8IwPld9oe2oF/NzjazK; incap_ses_634_88065=ESGBEzGE51jm0Uyj4GvMCKMObFkAAAAAjyMH7u0GiLxN7iZgSqd42Q==; PHPSESSID=64acgo82nlu4s0i1arsmuc1dc0; incap_ses_623_88065=XPmiVcNTJkx+H6igaFelCLMObFkAAAAAN3pYimkGoKngaTzO/+0j2A==; phpbb3_ja5fa_u=892596; phpbb3_ja5fa_k=; phpbb3_ja5fa_sid=62bf3cbef6a6aba41f5b5c8ece05a585; btcchina_jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LmJ0Y2MuY29tIiwiYXVkIjoiODkyNTk2IiwiZXhwIjoxNTAwMjc1NjE4LCJpYXQiOjE1MDAyNTM5MjksIm90cCI6ZmFsc2UsInJlbSI6ZmFsc2UsImFwaSI6ImFjY291bnQifQ.bGPyrKt9Ktd-lKrAyikmAij7hzBbNO7Tj988TiG80Qg; XSRF-TOKEN=c79dc61922fac9b5c24a4d7f4fc1d07e; _ga=GA1.2.1162318534.1499779275; Hm_lvt_c3fc3b8cd7a4c51920b20de4a6ff30cb=1499779322,1500074131,1500209142; Hm_lpvt_c3fc3b8cd7a4c51920b20de4a6ff30cb=1500254020; btcchina_lang=en',
    'accept-language': 'en-US,en;q=0.8',
    referer: 'https://www.btcchina.com/trade/analysis/',
    'x-devtools-request-id': '11444.1022',
    'x-devtools-emulate-network-conditions-client-id': 'f4f65138-73df-4bb8-bc64-e26c5f1b6d7e',
    accept: 'application/json, text/plain, */*',
    'content-type': 'application/json;charset=UTF-8',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36 FirePHP/4Chrome',
    'x-xsrf-token': 'c79dc61922fac9b5c24a4d7f4fc1d07e',
    origin: 'https://www.btcchina.com',
    'json-web-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LmJ0Y2MuY29tIiwiYXVkIjoiODkyNTk2IiwiZXhwIjoxNTAwMjc1NjE4LCJpYXQiOjE1MDAyNTM5MjksIm90cCI6ZmFsc2UsInJlbSI6ZmFsc2UsImFwaSI6ImFjY291bnQifQ.bGPyrKt9Ktd-lKrAyikmAij7hzBbNO7Tj988TiG80Qg' },
  body: '{"jsonrpc":"2.0","method":"getHistoryPaginator","id":"97b5ec48-a1ce-4080-979f-2d1175601ee3","params":{"market":"cnybtc","fromtime":1500217199.999,"totime":1500389999.999,"page":1,"count_per_page":1000}}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
