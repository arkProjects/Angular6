import { MessageService } from './message.service';

describe( 'MessageService', () => {
    let messageService : MessageService;

    beforeEach(() => {
        messageService = new MessageService();
    });

    it( 'should add an item to messages when add() is called', () => {
        // arrange
        let message = 'hello';

        // act
        messageService.add( message );

        // assert (messageService. messages represents the state of the MessageService instance - we assert this changes as expected)
        expect( messageService.messages.length ).toBe( 1 );
        expect( messageService.messages ).toContain( message ); // toContain() checks if an item exists in an array
    });

    // Exercise: Check that calling clear removes all messages
    it( 'should clear out all messages when clear() is called', () => {
        // arrange - we choose to set up the state before test directly (rather than calling add)
        messageService.messages = [
            'hello', 'how are you?'
        ];

        // act
        messageService.clear();

        // assert
        expect( messageService.messages.length ).toBe( 0 );
    });
});