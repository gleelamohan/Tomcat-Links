/* Defines the product entity */
export interface IEnvironment {
   
  Paris :IParis[]
  Bangalore:IParis[],
  General:IParis[]
}

export interface IParis
{
     Id: number;
    Name: string;
    URL: string;
    Information: string;
}