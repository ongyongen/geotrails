import { supabase } from "../db"
import { User } from "../interfaces/user"
import { PostgrestSingleResponse } from "@supabase/supabase-js"
import { USER_TABLE } from "../config/databaseTables"

export const getAllUsers = async (): Promise<PostgrestSingleResponse<User>> => {
    return await supabase
        .from(USER_TABLE)
        .select()
        .returns<User>()
}

export const createNewUser = async (
    user: User
): Promise<PostgrestSingleResponse<null>> => {
    return await supabase
        .from(USER_TABLE)
        .insert([user])
}
