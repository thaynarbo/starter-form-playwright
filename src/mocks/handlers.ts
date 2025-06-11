import { http, HttpResponse, delay } from 'msw';

export const handlers = [
  http.post('/api/submit-form', async ({ request,params }) => {
    const data = await request.json();

    if(data?.email.includes("vendedor")){
       return HttpResponse.json(null,{status:409})
    }
    // Add a realistic delay to simulate network request

    
    return HttpResponse.json(
      {
        success: true,
        message: 'Cadastro realizado com sucesso!',
        data: {
          id: Math.random().toString(36).substr(2, 9),
          ...data,
          createdAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  }),
];