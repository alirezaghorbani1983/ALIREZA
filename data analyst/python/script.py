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

