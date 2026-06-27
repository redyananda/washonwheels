import axios from "axios";
import type { RandomUser, RandomUserApiResponse, CrewMember } from "./types";

const BASE_URL = "https://randomuser.me/api/";


function toCrewMember(user: RandomUser): CrewMember {
  return {
    name: `${user.name.first} ${user.name.last}`,
    avatar: user.picture.large,
  };
}

export async function getRandomUser(count = 20): Promise<CrewMember[]> {
  try {
    const { data } = await axios.get<RandomUserApiResponse>(BASE_URL, {
      params: { results: count, inc: "name,picture" },
    });
    return data.results.map(toCrewMember);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
