export type BaseEntityProps<T extends number | string = number> = {
  id: T;
  name: string;
};

export type PermissonProps = BaseEntityProps;
export interface UserProps extends BaseEntityProps {
  email: string;
  phone: string;
  permissions: PermissonProps[];
}

export type AuthProps = {
  userProfile: null | UserProps;
  user?: null | UserProps;
  access_token: null | string;
  refresh_token: null | string;
};

export type ResponseProps<T> = {
  data?: T;
  message?: string;
};

type PaginationResponseData<T> = {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  };
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

export type PaginationResponseProps<T> = Required<
  Omit<ResponseProps<PaginationResponseData<T>>, "message">
>;

export interface ProductProps extends BaseEntityProps {
  user_id: UserProps["id"];
  user_id_update: UserProps["id"];
  category_id: ProductCategoryProps["id"];
  avatar?: string;
  price: number;
  view: number;
}

export interface OrderProps extends BaseEntityProps {
  code: string;
  phone: number;
  email: string;
  address: string;
  delivery: number;
  payment: number;
  status: number;
  totalPrice: number;
  created_at: string;
  updated_at: string;
  note?: string;
}

export interface ProductCategoryProps extends BaseEntityProps {
  parentId: number;
}

export interface QueryProps {
  per_page?: string | number;
  page?: string | number;
  keyword: string | null;
}

export interface ErrorProps {
  message: string;
  errors: {
    [key: string]: string[];
  };
}

export interface PayloadLoginProps {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface ParentsProps {
  label: string;
  path: string;
}

export interface ChildrenProps {
  children: JSX.Element;
}

export interface AppBreadcrumbProps {
  pageName: string;
  parents?: ParentsProps[];
}

export interface PaginationProps {
  page: number;
  total: number | undefined;
  onChangePage: (page: number, pageSize: number) => void;
}

export interface HeaderPageProps {
  pageName: string;
  onSearch: (value: string) => void;
  openModalStore: () => void;
}

export interface DataListLayoutType
  extends ChildrenProps,
    AppBreadcrumbProps,
    PaginationProps,
    HeaderPageProps {}

export interface ProductCartProps extends BaseEntityProps {
  category: string;
  variant: string;
  quality: number;
  price: number;
  avatar: string;
}
