import { Injectable, NotFoundException } from '@nestjs/common';
import { AddInputType } from './types/add.input.type';
import { StudentEntity } from './entities/student.entity';

@Injectable()
export class StudentService {
    async add(input: AddInputType) {
        const { name,email} = input;
    
        const user = new StudentEntity();
        user.name = name;
        user.email = email;
        await user.save();
    
        return user;
      }

      async getStudents(){
        return await StudentEntity.find();
      }

      async updateStudent(id:number,input:AddInputType){
      
         const {name,email} = input;

        const student = await StudentEntity.findOneBy({id});

        if(!student){
            throw new NotFoundException('student not exist');
        }

       student.name = name;
       student.email = email;

        await student.save();
   
         return student;

        
      }

     async deleteStudent(id:number) {
        const student = await StudentEntity.findOneBy({id});

        if(!student){
            throw new NotFoundException('student not exist');
        }

      
        await student.remove();

        return "deleted";

      
       
      }


}
