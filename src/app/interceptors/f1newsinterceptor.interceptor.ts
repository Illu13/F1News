import { HttpInterceptorFn } from '@angular/common/http';

export const f1newsinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
