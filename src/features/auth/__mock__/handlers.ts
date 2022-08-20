import { ResponseComposition, rest, RestContext, RestRequest } from 'msw';

export function handlers() {
  return [
    rest.post('/mock/members/login', requestSignin),
    rest.post('/mock/members', requestSignup),
  ];
}

const requestSignin = (
  req: RestRequest<{ email: string; password: string }>,
  res: ResponseComposition,
  ctx: RestContext,
) => {
  const { body } = req;

  if (body !== undefined) {
    if (body.email === 'pass@pass.com' && body.password === 'pass') {
      return res(ctx.status(200), ctx.json({ success: true, code: 200 }));
    }
    if (body.email !== 'pass@pass.com') {
      return res(ctx.status(200), ctx.json({ success: false, code: 201 }));
    }
    if (body.email === 'pass@pass.com' && body.password !== 'pass') {
      return res(ctx.status(200), ctx.json({ success: false, code: 202 }));
    }
  }
  return res(ctx.status(200), ctx.json({ success: false, code: 400 }));
};

const requestSignup: Parameters<typeof rest.post>[1] = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({ code: 200, success: true, message: 'message' }),
  );
};
