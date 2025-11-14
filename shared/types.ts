// Tipi condivisi tra frontend e backend

export interface Product {
  id: string
  title: string
  description: string
  thumbnail?: string
  variants: ProductVariant[]
  categories?: Category[]
  tags?: Tag[]
}

export interface ProductVariant {
  id: string
  title: string
  sku?: string
  prices: Price[]
  options: ProductOption[]
}

export interface Price {
  id: string
  amount: number
  currency_code: string
}

export interface Category {
  id: string
  name: string
  handle: string
  description?: string
}

export interface Tag {
  id: string
  value: string
}

export interface ProductOption {
  id: string
  title: string
  values: ProductOptionValue[]
}

export interface ProductOptionValue {
  id: string
  value: string
}

export interface Cart {
  id: string
  items: LineItem[]
  total: number
  subtotal: number
  tax_total: number
  shipping_total: number
}

export interface LineItem {
  id: string
  title: string
  description: string
  thumbnail?: string
  quantity: number
  unit_price: number
  total: number
  variant: ProductVariant
}

export interface Customer {
  id: string
  email: string
  first_name?: string
  last_name?: string
  phone?: string
}

export interface Order {
  id: string
  display_id: number
  email: string
  status: OrderStatus
  payment_status: PaymentStatus
  fulfillment_status: FulfillmentStatus
  total: number
  items: LineItem[]
  shipping_address: Address
  billing_address: Address
}

export interface Address {
  id: string
  first_name?: string
  last_name?: string
  company?: string
  address_1: string
  address_2?: string
  city: string
  country_code: string
  province?: string
  postal_code: string
  phone?: string
}

export enum OrderStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  ARCHIVED = 'archived',
  CANCELED = 'canceled',
  REQUIRES_ACTION = 'requires_action'
}

export enum PaymentStatus {
  NOT_PAID = 'not_paid',
  AWAITING = 'awaiting',
  CAPTURED = 'captured',
  PARTIALLY_REFUNDED = 'partially_refunded',
  REFUNDED = 'refunded',
  CANCELED = 'canceled',
  REQUIRES_ACTION = 'requires_action'
}

export enum FulfillmentStatus {
  NOT_FULFILLED = 'not_fulfilled',
  PARTIALLY_FULFILLED = 'partially_fulfilled',
  FULFILLED = 'fulfilled',
  PARTIALLY_SHIPPED = 'partially_shipped',
  SHIPPED = 'shipped',
  PARTIALLY_RETURNED = 'partially_returned',
  RETURNED = 'returned',
  CANCELED = 'canceled',
  REQUIRES_ACTION = 'requires_action'
}