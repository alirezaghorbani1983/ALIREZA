print("This message has mismatched quote marks!")
print('Abracadabra')


 below:
runtime = 95;
release_year = 1999;



rating_out_of_10 = 5.8;

#quilt

#First we create the variables
quilt_width = 8;
quilt_length = 12;

#Then we print the size
print(quilt_width * quilt_length);

#Whoops! That's a little too large
quilt_length = 8;

#Let's see how large it is now
print(quilt_width * quilt_length);

# 2 to the 10th power, or 1024
print(2 ** 10)

# 8 squared, or 64
print(8 ** 2)

# 9 * 9 * 9, 9 cubed, or 729
print(9 ** 3)

# We can even perform fractional exponents
# 4 to the half power, or 2
print(4 ** 0.5)

# 6x6 quilt
print(6 ** 2)

# 7x7 quilt
print(7 ** 2)

# 8x8 quilt
print(8 ** 2)

# part 2
print(6 ** 4)

order_263_r = 263 % 11

print(order_263_r)

order_263_coupon = "no";

# Print the result
print(order_263_coupon)

string1 = "The wind, "
string2 = "which had hitherto carried us along with amazing rapidity, "
string3 = "sank at sunset to a light breeze; "
string4 = "the soft air just ruffled the water and "
string5 = "caused a pleasant motion among the trees as we approached the shore, "
string6 = "from which it wafted the most delightful scent of flowers and hay."

# Define message below:
message = string1 + string2 + string3 + string4 + string5 + string6


#print(message)
print(message)

total_price = 0

new_sneakers = 50.00

total_price += new_sneakers

nice_sweater = 39.00
fun_books = 20.00
# Update total_price here:
total_price += nice_sweater
total_price += fun_books

print("The total price is", total_price)

# Assign the string here
to_you = """
Stranger, if you passing meet me and desire to speak to me, why
  should you not speak to me?
And why should I not speak to you?
"""

print(to_you)

my_age = 40
half_my_age = my_age / 2
greeting = "Hello"
name = "Alireza"
greeting_with_name = greeting + ", " + name + "!"

print("My age:", my_age)
print("Half my age:", half_my_age)
print("Greeting:", greeting)
print("Name:", name)
print("Greeting with name:", greeting_with_name)

# Python Syntax: Medical Insurance Project
# create the initial variables below
age = 28

sex = 1
bmi = 26.2
num_of_childeren = 3
smoker = 0

𝑖𝑛𝑠𝑢𝑟𝑎𝑛𝑐𝑒_𝑐𝑜𝑠𝑡=250∗𝑎𝑔𝑒−128∗𝑠𝑒𝑥+370∗𝑏𝑚𝑖+425∗𝑛𝑢𝑚_𝑜𝑓_𝑐ℎ𝑖𝑙𝑑𝑟𝑒𝑛+24000∗𝑠𝑚𝑜𝑘𝑒𝑟−12500insurance_cost=250∗age−128∗sex+370∗bmi+425∗num_of_children+24000∗smoker−12500

sex = 1;
age += 4;
print(age)

new_insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500
print(new_insurance_cost)

change_in_insurance_cost = new_insurance_cost - insurance_cost

print("The change in cost of insurance after increasing the age by 4 years is " + str(change_in_insurance_cost) + " dollars.")

# create the initial variables below
age = 28

sex = 0
bmi = 26.2
num_of_children = 3
smoker = 0

# Add insurance estimate formula below
insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500

print("This person's insurance cost is " + str(insurance_cost) + " dollars.")


# Age Factor

age += 4;
print(age)

new_insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500

print(new_insurance_cost)

change_in_insurance_cost = new_insurance_cost - insurance_cost

print("The change in cost of insurance after increasing the age by 4 years is " + str(change_in_insurance_cost) + " dollars.")

# Reset age to 28
age = 28

# BMI Factor
bmi += 3.1

# Calculate the new insurance cost with the updated BMI
new_insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500

# Calculate the change in insurance cost
change_in_insurance_cost = new_insurance_cost - insurance_cost

# Display the change in insurance cost
print("The change in estimated insurance cost after increasing BMI by 3.1 is " + str(change_in_insurance_cost) + " dollars.")


# Male vs. Female Factor
bmi = 26.2
sex = 1

# Calculate the new insurance cost with the updated sex value
new_insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500

change_in_insurance_cost = new_insurance_cost - insurance_cost

print("The change in estimated cost for being male instead of female is " + str(change_in_insurance_cost) + " dollars.")

# Smoker Factor
smoker = 1

# Calculate the new insurance cost with the updated smoker value
new_insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500

# Calculate the change in insurance cost due to smoking
change_in_insurance_cost = new_insurance_cost - insurance_cost

# Display the change in insurance cost
print("The change in estimated insurance cost for being a smoker is " + str(change_in_insurance_cost) + " dollars.")

# Reset smoker to 0 (non-smoker)
smoker = 0

# Number of Children Factor
num_of_children = 5  # Change to a different value

# Calculate the new insurance cost with the updated number of children
new_insurance_cost = (250 * age) - (128 * sex) + (370 * bmi) + (425 * num_of_children) + (24000 * smoker) - 12500

# Calculate the change in insurance cost due to number of children
change_in_insurance_cost = new_insurance_cost - insurance_cost

# Display the change in insurance cost
print("The change in estimated insurance cost for having more children is " + str(change_in_insurance_cost) + " dollars.")

print("Setting the Empire State Building as the starting point and Times Square as our destination.")
print("Calculating the total distance between our points.") 
print("The best route is by train and will take approximately 10 minutes.") 

# Call your function here:
directions_to_timesSq()

def directions_to_timesSq():
  print("Walk 4 mins to 34th St Herald Square train station.")
  print("Take the Northbound N, Q, R, or W train 1 stop.")
  print("Get off the Times Square 42nd Street stop.")
  print("Take lots of pictures!")

# Call your function here:
directions_to_timesSq()
directions_to_timesSq()

function createRangeIterator(min = 0, max = Infinity, step = 1) {
  let nextNum = min;
  let numCount = 0;

  const rangeIterator = {
    next: function () {
      let result;
      if (nextNum < max) {
        result = { value: nextNum, done: false };
        nextNum += step;
        numCount++;
        return result;
      }
      return { value: numCount, done: true };
    },
  };

  return rangeIterator;
}

# Your code below: 
print("Checking the weather for you!")

def weather_check():
  print("Looks great outside! Enjoy your trip.")

print("False Alarm, the weather changed! There is a thunderstorm approaching. Cancel your plans and stay inside.")

weather_check()

# Your code below:
def generate_trip_instructions(location):
  print("Looks like you are planning a trip to visit " + location)
  print("You can use the public subway system to get to " + location)

generate_trip_instructions("Central Park")

# Write your code below:
def trip_planner(first_destination, second_destination, final_destination = "Codecademy HQ"):
  print("Here is what your trip will look like!")
  print("First, we will stop in " + first_destination + ", then " + second_destination + ", and lastly " + final_destination + ".")

# Call the function with the provided destinations
trip_planner("Denmark", "France", "Germany")

max_price = max(t_shirt_price, shorts_price, mug_price, poster_price)

# Print the maximum price
print(max_price)

min_price = min(tshirt_price, shorts_price, mug_price, poster_price)

print(min_price)

rounded_price = round(tshirt_price, 1)

print(rounded_price)


def my_function():
 x = 200
 print(x)

my_function()
def outer_function():
  x = 200
  # Initialized in outer function

  def inner_function():
    print(x)
  inner_function()

outer_function()

current_budget = 3500.75

def print_remaining_budget(budget):
  print("Your remaining budget is: $" + str(budget))

print_remaining_budget(current_budget)

# Write your code below: 
def deduct_expense(budget, expense):
  return (budget - expense)

shirt_expense = 9

new_budget_after_shirt = deduct_expense(current_budget, shirt_expense)

print_remaining_budget(new_budget_after_shirt)

def top_tourist_locations_italy():
  first = "Rome"
  second = "Venice"
  third = "Florence"
  return first, second, third

most_popular1, most_popular2, most_popular3 = top_tourist_locations_italy()

print(most_popular1)
print(most_popular2)
print(most_popular3)

def trip_planner_welcome(name):
  print("Welcome to tripplanner v1.0 " + name)

trip_planner_welcome("Ali")

def estimated_time_rounded(estimated_time):
  rounded_time = round(estimated_time)
  return rounded_time

estimate = estimated_time_rounded(3.6)

# Create calculate_insurance_cost() function below: 


# Initial variables for Maria 
age = 28
sex = 0  
bmi = 26.2
num_of_children = 3
smoker = 0  

# Estimate Maria's insurance cost
insurance_cost = 250*age - 128*sex + 370*bmi + 425*num_of_children + 24000*smoker - 12500

print("The estimated insurance cost for Maria is " + str(insurance_cost) + " dollars.")

# Initial variables for Omar
age = 35
sex = 1 
bmi = 22.2
num_of_children = 0
smoker = 1  

# Estimate Omar's insurance cost 
insurance_cost = 250*age - 128*sex + 370*bmi + 425*num_of_children + 24000*smoker - 12500

print("The estimated insurance cost for Omar is " + str(insurance_cost) + " dollars.")

def calculate_insurance_cost(name, age, sex, bmi, num_of_children, smoker):
  estimated_cost = 250*age - 128*sex + 370*bmi + 425*num_of_children + 24000*smoker - 12500
  print("The estimated insurance cost for " + name + " is " + str(estimated_cost) + " dollars.")
  return estimated_cost

#  Estimate Maria's insurance cost
maria_insurance_cost = calculate_insurance_cost(28, 0, 26.2, 3, 0)

# Estimate Omar's insurance cost 
omar_insurance_cost = calculate_insurance_cost(35, 1, 22.2, 0, 1)

# Create calculate_insurance_cost() function
def calculate_insurance_cost(age, sex, bmi, num_of_children, smoker, name):
    estimated_cost = 250*age - 128*sex + 370*bmi + 425*num_of_children + 24000*smoker - 12500
    message = "The estimated insurance cost for " + name + " is " + str(estimated_cost) + " dollars."
    return message, estimated_cost

# Function to calculate the difference between two insurance costs
def calculate_difference(cost1, cost2):
    difference = abs(cost1 - cost2)
    print("The difference in insurance cost is " + str(difference) + " dollars.")
    return difference

# Estimate Maria's insurance cost
maria_message, maria_insurance_cost = calculate_insurance_cost(28, 0, 26.2, 3, 0, "Maria")
print(maria_message)

# Estimate Omar's insurance cost 
omar_message, omar_insurance_cost = calculate_insurance_cost(35, 1, 22.2, 0, 1, "Omar")
print(omar_message)



# Calculate the difference between Maria's and Omar's insurance costs
calculate_difference(maria_insurance_cost, omar_insurance_cost)

test_value = 100

if test_value > 1:
  print("This code is executed!")

if test_value > 1000:
  print("This code is NOT executed!")

print("Program continues at this point.")

test_grade = 61

if test_grade > 60:
  print("You passed.")
else:
  print("You failed.")


pet_type = "fish"

if pet_type == "dog":
  print("You have a dog.")
elif pet_type == "cat":
  print("You have a cat.")
elif pet_type == "fish":
  # This is performed
  print("You have a fish")
else:
  print("Not sure!")

  # Enter a user name here, make sure to make it a string
user_name = "angela_catlady_87"

if user_name == "angela_catlady_87":
  print("I know it is you, Dave! Go away!")

  x = 20
y = 20

# Write the first if statement here:
if x == y:
  print("These numbers are the same")


credits = 120

# Write the second if statement here:
if credits >= 120:
  print("You have enough credits to graduate!")

credits = 118
gpa = 2.0

if credits >= 120 or gpa >= 2.0:
  print("You have met at least one of the requirements.")

not 1 + 1 == 2  
not 7 < 0   


if not credits >= 120:
  print("You do not have enough credits to graduate.")

if not gpa >= 2.0:
  print("Your GPA is not high enough to graduate.")

if not credits >= 120 and not gpa >= 2.0:
  print("You do not meet either requirement to graduate!")

credits = 120
gpa = 1.9

if (credits >= 120) and (gpa >= 2.0):
  print("You meet the requirements to graduate!")
else:
  print("You do not meet the requirements to graduate.")

grade = 86

if grade >= 90:
  print("A")
elif grade >= 80:
  print("B")
elif grade >= 70:
  print("C")
elif grade >= 60:
  print("D")
else:
  print("D")

if planet == 1:
  weight = weight * 0.91
elif planet == 2:
  weight = weight * 0.38
elif planet == 3:
  weight = weight * 2.34
elif planet == 4:
  weight = weight * 1.06
elif planet == 5:
  weight = weight * 0.92
elif planet == 6:
  weight = weight * 1.19

print("Your weight:", weight)

# Add your code here
def analyze_smoker(smoker_status):
  if smoker_status = 1:
    print("To lower your cost, you should consider quitting smoking.")
  else:
    print("Smoking is not an issue for you.")

  
 
# Function to estimate insurance cost:
def estimate_insurance_cost(name, age, sex, num_of_children, smoker):
  estimated_cost = 400*age - 128*sex + 425*num_of_children + 10000*smoker - 2500
  print(name + "'s Estimated Insurance Cost: " + str(estimated_cost) + " dollars.")
  return estimated_cost
 
# Estimate Keanu's insurance cost
keanu_insurance_cost = estimate_insurance_cost(name = 'Keanu', age = 29, sex = 1, num_of_children = 3, smoker = 1)

# Add your code here
def analyze_smoker(smoker_status):
  if smoker_status == 1:
    print("To lower your cost, you should consider quitting smoking.")
  else:
    print("Smoking is not an issue for you.")

  
 
# Function to estimate insurance cost:
def estimate_insurance_cost(name, age, sex, num_of_children, smoker):
  estimated_cost = 400*age - 128*sex + 425*num_of_children + 10000*smoker - 2500
  print(name + "'s Estimated Insurance Cost: " + str(estimated_cost) + " dollars.")
  analyze_smoker(smoker)
  return estimated_cost

john_insurance_cost = estimate_insurance_cost(name = 'john', age = 42, sex = 1, num_of_children = 6, smoker = 1)
 
# Estimate Keanu's insurance cost
keanu_insurance_cost = estimate_insurance_cost(name = 'Keanu', age = 29, sex = 1, num_of_children = 3, smoker = 1)

orders = ["daisies", "periwinkle"]

print(orders)

orders.append("tulips")

orders = ["daisy", "buttercup", "snapdragon", "gardenia", "lily"]

# Create new orders here:
new_orders = ["lilac", "iris"]

orders_combined = orders + new_orders

broken_prices = [5, 3, 4, 5, 4] + [4]

shopping_list = ["eggs", "butter", "milk", "cucumbers", "juice", "cereal"]

last_element = shopping_list [-1]

index5_element = shopping_list [5]

print(last_element)

print(index5_element)

garden_waitlist = ["Jiho", "Adam", "Sonny", "Alisha"]

garden_waitlist[1] = "Calla"

print(garden_waitlist)

garden_waitlist[-1] = "Alex"

print(garden_waitlist)



