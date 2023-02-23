### Read and follow the instrucations carefully.

1. Install Node form offical Website. Choose LTS (Long Time Support) so you could use npm for installing and running the application.
   https://nodejs.org/en/
2. Install Java to your operation system. will be useful while running the android application.
   https://www.java.com/en/download/help/download_options.html

3. Install Git to your operation system. If you don't have already, to clone application from the git repository.
   https://git-scm.com/downloads

4. Install Vscode:
   https://code.visualstudio.com/download

git clone the project form repo on Github, open the terminal.

    git clone https://github.com/waleediqbal1717/carapp.git     -- clone it from the repository.

    cd carapp                                                 -- navigate to dirctory

    npm install                                                   -- Install the dependencies

#### Prerequisites before running the application. Using Mac, Windows, or Linux

1.  Navigate to Reat Native CLI Quickstart tab in the link below and follow the steps carefully.

    https://reactnative.dev/docs/environment-setup

2.  install Android SDK and Android studtio to any OS that you use.
    For running the android version of the application. Link will provide all the three operation systems.

    https://developer.android.com/studio/install

    if you want to install android SDK using Terminal for example in linux:

    `sudo apt-get install android-sdk`

3.  necessary variables to be added to the PATH.
    open terminal, by default you should be in the home dir.
    use pwd to make sure and result will be /home/your_pc_name
    in linux, open the .bashrc using vim .bash
    paste the following lines:
        export ANDROID_HOME=$HOME/Android/Sdk
        export PATH=$PATH:$ANDROID_HOME/tools
        export PATH=$PATH:$ANDROID_HOME/platform-tools
    save the changes:\
     from keyboard press Esc\
     type :w or :wq for save and quit.\
     hit enter

close Terminal, sometimes its need to restart the your computer to ensure that changes works properly.

#### To run the application

> either open the application by terminal or Vscode\
> open terminal and type\
> `npm run android` -- FOR ANDROID VERSION\
> `npm run ios` -- FOR iOS VERSION\
