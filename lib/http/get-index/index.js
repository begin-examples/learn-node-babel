export async function handler(req) {
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: `<pre>req?.queryStringParameters?.foo: ${req?.queryStringParameters.foo} </pre>`
  }
}