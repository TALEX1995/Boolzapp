console.log('JS OK', Vue);

// Initialize app

const app = Vue.createApp ({

    data: () => {
        return {

          // Current id used to change chat and message
          currentId: 1,

          // New mwssage
          newMessage: '',

          // Input Filter
          searchUser: '',

          // Current message id used to show the dropdown message menu
          currentMessageId: 0, 

          // User info
          user: {
            name: 'Alex Tanase',
            avatar: '_io'
          },

          // Contacts and message
          contacts: [
            {
              id: 1,
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di stendere i panni',
                  status: 'sent'
                },
                {
                  id: 3,
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
                }
              ],
            },
            {
              id: 2,
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received'
                },
                {
                  id: 3,
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'sent'
                }
              ],
            },
            {
              id: 3,
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received'
                },
                {
                  id: 2,
                  date: '28/03/2020 10:20:10',
                  message: 'Sicuro di non aver sbagliato chat?',
                  status: 'sent'
                },
                {
                  id: 3,
                  date: '28/03/2020 16:15:22',
                  message: 'Ah scusa!',
                  status: 'received'
                }
              ],
            },
            {
              id: 4,
              name: 'Alessandro B.',
              avatar: '_4',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'Si, ma preferirei andare al cinema',
                  status: 'received'
                }
              ],
            },
            {
              id: 5,
              name: 'Alessandro L.',
              avatar: '_5',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Ricordati di chiamare la nonna',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'Va bene, stasera la sento',
                  status: 'received'
                }
              ],
            },
            {
              id: 6,
              name: 'Claudia',
              avatar: '_5',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao Claudia, hai novità?',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'Non ancora',
                  status: 'received'
                },
                {
                  id: 3,
                  date: '10/01/2020 15:51:00',
                  message: 'Nessuna nuova, buona nuova',
                  status: 'sent'
                }
              ],
            },
            {
              id: 7,
              name: 'Federico',
              avatar: '_7',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Fai gli auguri a Martina che è il suo compleanno!',
                  status: 'sent'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'Grazie per avermelo ricordato, le scrivo subito!',
                  status: 'received'
                }
              ],
            },
            {
              id: 8,
              name: 'Davide',
              avatar: '_8',
              visible: true,
              messages: [
                {
                  id: 1,
                  date: '10/01/2020 15:30:55',
                  message: 'Ciao, andiamo a mangiare la pizza stasera?',
                  status: 'received'
                },
                {
                  id: 2,
                  date: '10/01/2020 15:50:00',
                  message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                  status: 'sent'
                },
                {
                  id: 3,
                  date: '10/01/2020 15:51:00',
                  message: 'OK!!',
                  status: 'received'
                }
              ],
            }
          ],
      
        }
    },

    computed: {
      // Take current contact by ID
      currentContact(){
        return this.contacts.find(contact => contact.id === this.currentId);
      },

      // Take current chat by current contact
      currentChat(){
        return this.currentContact.messages;
      },

      // Chat Filter
      chatFilter () {

        const user = this.searchUser.toLowerCase()
        
        return this.contacts.filter((contact) => {
          return contact.name.toLowerCase().includes(user)
        })
      },

      // Current message
      currentMessage () {
        return this.currentChat.find(message => message.id === this.currentMessageId)
      },


    },

    
    methods: {
      takeAvatar (contact) { 
        // return 'img/avatar' + contact.avatar + '.jpg' 
        return `img/avatar${contact.avatar}.jpg`
      },
      
      setCurrentId (contact) {
        this.currentId = contact.id

        // Remove current Message id to not see the remove message option when change chat
        this.currentMessageId = 0
      },

      setCurrentMessageId (message) {
        // Condition to see if the dropdown message menu is already clicked else change current Message id
        if(this.currentMessageId === message.id) this.currentMessageId = 0
        else this.currentMessageId = message.id
        
      },

      addMessage () {
        if(!this.newMessage) return
        
        const newMessage = {
          status: 'sent',
          id: new Date().getTime(),
          date: this.getDateRealTime(),
          message: this.newMessage
        }
        
        
        this.currentChat.push(newMessage)
    
        this.newMessage = '';

        this.answerTimeout()  
        
         
      },

      // Funcition to take the date when sending the message
      getDateRealTime () {

        const date = new Date
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        
        if(month < 10) month = `0${month}`
        
        if(day < 10) day = `0${day}`
        
        return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
      },

      // Automatic Answer
      answerTimeout () {
        setTimeout(() => {
          const newReceivedMessage = {
            status: 'received',
            id: new Date().getTime(),
            date: this.getDateRealTime(),
            message: 'OK'
          }

          this.currentChat.push(newReceivedMessage)

        }, "1000");
      },


      // la current chat e readonly quindi dovrò trovare il modo di agire direttamente nei data
      // Delete Message
      deleteMessage () {

        // this.currentChat = this.currentChat.filter((message) => {
        //   return message.id !== this.currentMessageId
        // })
        // console.log('ciao')

        this.currentContact.messages = this.currentContact.messages.filter((message) => {
          return message.id !== this.currentMessageId;
        });
        
      },

      lastMessageText(contact) {
        return contact.messages[contact.messages.length - 1].message
      },

      lastMessageDate (contact) {
        return contact.messages[contact.messages.length - 1].date
      }
      
      
    }

})


// Mount app

app.mount('#root')