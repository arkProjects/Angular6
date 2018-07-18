import { MessageService } from './message.service';

describe( 'Message Service', () => {
    let messageService : MessageService;

    beforeEach(() => {
    });

    it( 'should have no message to start with', () => {
        messageService = new MessageService();

        expect( messageService.messages.length ).toBe( 0 );
    });

    it( 'should add message when add is called', () => {
        messageService = new MessageService();
        
        messageService.add( 'hello' );

        expect( messageService.messages.length ).toBe( 1 );
    });
    
    it( 'should clear messages when clear is called', () => {
        messageService = new MessageService();
        messageService.add( 'hello' );

        messageService.clear();

        expect( messageService.messages.length ).toBe( 0 );
    });
});