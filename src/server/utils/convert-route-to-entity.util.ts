const mapping: Record<string, string> = {
  companies: 'company',
  employees: 'employee',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
