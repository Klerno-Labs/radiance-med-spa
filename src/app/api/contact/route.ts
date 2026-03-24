export async function POST(request: Request) {
  const data = await request.json();
  // Here you would typically handle the form submission, e.g., send an email
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}