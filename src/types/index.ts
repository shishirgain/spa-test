export interface User {
    id?: Number,
    name: String,
    email: String,
    email_verified?: null | String,
    created_at?: String,
    undated_at?: String
}

export interface Domain {
    id?: Number,
    domain: String,
    tenant_id: String,
    created_at?: String,
    undated_at?: String
}

export interface Tenant {
    id?: Number,
    name: String,
    user_id: String,
    data: null | String,
    description: String,
    domains: Domain [],
    tenancy_db_name: String,
    created_at?: String,
    undated_at?: String
}

export interface Subscriber {
    id?: Number,
    name: String,
    email: String,
    email_verified_at?: null | String,
    tenant: Tenant,
    created_at?: String,
    undated_at?: String
}
