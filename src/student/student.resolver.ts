import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './types/student.type';
import { StudentService } from './student.service';
import { AddInputType } from './types/add.input.type';

@Resolver()
export class StudentResolver {
  
     constructor(private studentService:StudentService){}

    @Mutation(() => StudentType)
  add(@Args('input') input: AddInputType) {
    return this.studentService.add(input);
  }

  @Mutation(()=>StudentType)
  updateStudent(@Args('id') id :number,
                @Args('input') input:AddInputType){
    return this.studentService.updateStudent(id,input);
  }

  @Mutation(()=>String)
  deleteStudent(@Args('id') id:number){
    return this.studentService.deleteStudent(id);
  }

  @Query(() => [StudentType])
  getStudents(){
    return this.studentService.getStudents();
    
  }

}
