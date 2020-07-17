# Server Side Languages Wk2 Assignment 1 – Ruby
# • Umholtz, Tommy
# • Full Sail University
# • Web Design and Development, Bachelors of Science – Online

class Grader
    def gradeInfo
        puts "Type your name: "
        name = gets
        puts "Type an assignment name: "
        assignment = gets
        puts "Enter the grade number for that assignment: "
        grade = gets.to_f

        if grade <=100 and grade >=90
            print("Hello "+name+"\nYour letter grade for "+assignment+"assignment is as follows: A\nAssignment details:\nYou have met most or all of the assignment's requirements.\n")
        elsif grade <90 and grade >=80
            print("Hello "+name+"\nYour letter grade for "+assignment+"assignment is as follows: B\nAssignment details:\nYou have met most of the assignment's requirements.\n")
        elsif grade <80 and grade >=70
            print(("Hello "+name+"\nYour letter grade for "+assignment+"assignment is as follows: C\nAssignment details:\nYou have met many of the assignment's requirements.\n"))
        elsif grade <70 and grade >=60
            print(("Hello "+name+"\nYour letter grade for "+assignment+"assignment is as follows: D\nAssignment details:\nYou have met some of the assignment's requirements.\n"))
        elsif grade >60 and grade >=0
            print(("Hello "+name+"\nYour letter grade for "+assignment+"assignment is as follows: F\nAssignment details:\nYou have met few or none of the assignment's requirements.\n"))
        else
            print("You did not entered a grade number between 0 ant 100.")
        end
    end

newGrader = Grader.new
print(newGrader.gradeInfo())
end