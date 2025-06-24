export async function GET() {
  return Response.json({
    latestVersionIOS: '0.0.17',
    latestVersionAndroid: '0.0.17',
  })
}
