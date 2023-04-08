import datetime
import os

author = ""

def create_journal():
    name = input("Name: ") #ask for name
    cwd = os.getcwd() #Uses os import to get our current path
    path = cwd + "/" + name #Concatenate to create a new path
    try:
        os.mkdir(path)
    except OSError:
        print("Creation of the directory %s failed" % path)
    else:
        print("Successfully created the directory")

def open_journal():
    os.chdir(os.getcwd()) #Change directory to current path
    journal_list = os.listdir() #Get list of journals
    
    print("Current Journals: " + str(len(journal_list)))
    for journal in journal_list: 
        print(journal) #Print out each journal name for the user
        
    name = input("Name of journal:  ") #Ask user to select a journal
    cwd = os.getcwd() #Find the directory we’re in
    path = cwd + "/" + name #Update path
    os.chdir(path) #Change directories the path we determined
    directory_list = os.listdir() #Get a list of entries
    print("Current Entries: " + str(len(directory_list)))
    for entry in directory_list:
        print(entry) #Display entries for the user

def fetch_content():
    content = input("Write till your heart's content :)") #Input
    return content

def add_content():
    title = input("What's the title of your entry?  ") #Get a title
    content = fetch_content() #get content
    filename = title.replace(" ","") + ".txt" #Remove spaces in name
    entry = open(filename, "a") #create/open file
    entry.write(author + "\n") #add name
    entry.write(title + "\n") #add title
    entry.write(str(datetime.datetime.now()) + "\n") #add date
    
    count = 0
    prev_index = 0
    for i in range(0, len(content) - 1):
        if content[i] == " ":
            entry.write(content[prev_index:i])
            count += 1
            prev_index = i
        if count == 10:
            count = 0
            entry.write("\n")
            
    entry.close()

def add_page():
    title = input("Name your entry:  ")
    filename = title.replace(" ","") + ".txt"
    add_content(title)

def remove_page():
    title = input("What's the title of your entry?  ")
    filename = title.replace(" ","") + ".txt"
    os.remove(filename)

def controls():
    print("What would you like to do?: ")
    print("1: Create a journal")
    print("2: Open a journal")
    print("3: Create an entry")
    print("4: Add to an entry")
    print("5: Remove an entry")
    option = input("Your choice:  ")
    print("-----\n-----")
    #^^This prefaces the user with options and asks for input
    if option == "1" or option == 1:
        create_journal()
    elif option == "2" or option == 2:
        open_journal()
    elif option == "3" or option == 3:
        add_page()
    elif option == "4" or option == 4:
        add_content()
    elif option == "5" or option == 5:
        remove_page()
    else:
        print("Please answer based on your choices")
        controls()
    #^Conditions that execute functions based on user's choice
    choice = input("Do you need to do anything else? (y/n)")
    if choice == "y" or choice == "yes":
        controls()
    else:
        print("See you later!")
    #^Asks if the user wants to do anything else. If not,
    #the program ends

author = input("What's your name?  ")
controls()