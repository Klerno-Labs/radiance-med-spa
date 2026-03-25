export async function POST(request: Request) {
  const data = await request.json();
  // Here you would typically handle the data, e.g., send it to an email service
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}