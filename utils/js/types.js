export type TKeyValue = {
  key: string,
  value: string
}

export type TMoltinBrand = {
  value: string,
  data: {
    id: string,
    order: any,
    created_at: string,
    updated_at: string,
    slug: string,
    status: {
      value: string,
      data: TKeyValue
    },
    title: string,
    description: string
  }
}

export type TMoltinPrice = {
  value: string,
  data: {
    formatted: {
      with_tax: string,
      without_tax: string,
      tax: string
    },
    rounded: {
      with_tax: string,
      without_tax: string,
      tax: string
    },
    raw: {
      with_tax: string,
      without_tax: string,
      tax: string
    }
  }
}

export type TMoltinImage = {
  id: string,
  name: string,
  url: {
    http: string,
    https: string
  },
  segments: {
    domain: string,
    suffix: string
  },
  details: {
    type: string,
    size: number,
    width: number,
    height: number
  }
}

export type TMoltinProduct = {
  id: string,
  order: any,
  created_at: string,
  updated_at: string,
  sku: string,
  title: string,
  slug: string,
  sale_price: number,
  status: {
    value: string,
    data: Array<TKeyValue>
  },
  categories: {
    value: string,
    data: Array<Object>
  },
  stock_level: number,
  stock_status: {
    value: string,
    data: Array<Object>
  },
  description: string,
  requires_shipping: {
    value: string,
    data: Array<Object>
  },
  weight: number,
  height: number,
  width: number,
  depth: number,
  catalog_only: {
    value: string,
    data: Array<Object>
  },
  brand: {
    value: string,
    data: TMoltinBrand
  },
  price: TMoltinPrice
  images: Array<TMoltinImage>
}
