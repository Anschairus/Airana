
import { Injectable, CanActivate, ExecutionContext, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RolesGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  handleRequest(err, account, info: Error, context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const hasRole = () => account.roles.some((role) => roles.includes(role));
    if (!account) {
      throw new UnauthorizedException();
    }
    if (!(account.roles && hasRole())) {
      throw new ForbiddenException('Forbidden');
    }
    return account && account.roles && hasRole();
  }
}
