export class CreateProviderDto {
  cuit: number;
  name: string;
  shipping_time: number;
  shipping_cost: number;
  is_default?: boolean;
}
