export async function handler(req) {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: `<pre>req?.queryStringParameters?.foo: ${req?.queryStringParameters?.foo} </pre>`
  }
}
