import { sum } from "../sum";

test("Sum of the numbers" , () =>{
  
    const res = sum(2,3);

    Expect(res).ToBe(5);
})