import axios from "axios";

let instance = axios.create({
    method: "GET",
    baseURL: "http://hp-api.herokuapp.com/api",
    responseType: "json"
})
export type Character = {
    actor: string,
    alive: boolean,
    alternate_actors: string[],
    alternate_names: string[],
    ancestery: string,
    dateOfBirth: string,
    eyeColour: string,
    gender: string,
    hairColour: string,
    hogwartsStaff: boolean,
    hogwartsStudent: boolean,
    house: string,
    iamge: string,
    name: string,
    patronus: string,
    species: string,
    wand: {wood: string, core: string, length: number},
    wizard: boolean,
    yearOfBirth: number
};
export type House = "Gryffindor" | "Hufflepuff" | "Ravenclaw" | "Slytherin";
export const hp = {
    listCharacters: async(): Promise<Character[]> => {
        return instance({
            url: "/characters"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    listStudents: async(): Promise<Character[]> => {
        return instance({
            url: "/characters/students"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    listStaff: async(): Promise<Character[]> => {
        return instance({
            url: "/characters/staff"
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    listStudentsByHouse: async(house: House): Promise<Character[]> => {
        return instance({
            url: `/characters/house/${house}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}