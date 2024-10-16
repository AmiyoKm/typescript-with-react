
export interface Info {
    id :string
    name : string
    email :string
}
export interface AdminInfoList extends Info {
    role : string
    adminPass : string
}