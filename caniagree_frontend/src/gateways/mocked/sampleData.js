const services = [
  { id: '1', self: 'service/1', name: 'this is some' },
  { id: '2', self: 'service/2', name: 'random data' },
  { id: '3', self: 'service/3', name: 'so we can see' },
  { id: '4', self: 'service/4', name: 'that everything is working' },
  { id: '5', self: 'service/5', name: 'Youtube - Termos de Utilização' }
]

let paragraphId = 0
let _ = false

const nextParagraphId = () => '' + paragraphId++
const randomVotes = () => {
  const mul = _ ? 1000 : 600

  _ = !_

  return Math.floor(Math.random() * mul)
}

const paragraphs = {
  '1': {
    name: 'this is some',
    paragraphs: [
      {
        id: '1',
        body: 'first paragraph',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: '2',
        body: 'something really strange',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: '3',
        body: 'this part is really cool man',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      }
    ]
  },
  '2': {
    name: 'random data',
    paragraphs: [
      {
        id: '1',
        body: 'random === 4',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: '2',
        body: 'Math.random() === 10 * Math.random()',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: '3',
        body: 'Math.random() !== Math.random() (some times)',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      }
    ]
  },
  '3': {
    name: 'so we can see',
    paragraphs: [
      {
        id: '1',
        body: 'saw',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: '2',
        body: 'blind',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: '3',
        body: 'seen',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      }
    ]
  },
  '4': {
    name: 'that everything is working',
    paragraphs: [
      {
        id: '1',
        body: "did't do nothing yet",
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: '2',
        body: 'red alert in every test',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: '3',
        body: 'we are doing TDD, everything is ok and safe :)',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      }
    ]
  },
  '5': {
    name: 'Youtube - Termos de Utilização',
    paragraphs: [
      {
        id: nextParagraphId(),
        body:
          '1. Relação entre o YouTube e o utilizador \n 1.1 A utilização, pelo utilizador, do website YouTube (“Website”) e de quaisquer produtos, canais, software, fluxos de dados (data feeds) e serviços YouTube, incluindo o leitor de vídeo embebível (embeddable) (“YouTube Player”) disponibilizado ao utilizador no ou através do Website pelo YouTube (em conjunto, o “Serviço”) está sujeita aos termos e condições de um contrato entre o utilizador e o YouTube. “YouTube” significa a YouTube LLC, cuja sede é em 901 Cherry Avenue, San Bruno, CA 94066, Estados Unidos da América.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '1.2 O acordo entre o utilizador e o YouTube é composto de (A) os termos e condições constantes do presente documento, (B) a Política de Privacidade do YouTube (https://www.youtube.pt/t/privacy) e (C) as Orientações da Comunidade YouTube (https://www.youtube.pt/t/community_guidelines) (em conjunto, os “Termos”).',
        up_vote: 305,
        down_vote: 300
      },
      {
        id: nextParagraphId(),
        body:
          '1.3 Os Termos constituem um acordo vinculativo entre o utilizador e o YouTube relativamente ao uso do Serviço pelo Utilizador. É importante que o utilizador leia os Termos com atenção.',
        up_vote: 0,
        down_vote: 0
      },
      {
        id: nextParagraphId(),
        body:
          '1.4 Os Termos aplicam-se a todos os utilizadores do Serviço, incluindo utilizadores que contribuem com Conteúdos para o mesmo. “Conteúdos” inclui texto, software, scripts, gráficos, fotografias, sons, música, vídeos, combinações audiovisuais, funcionalidades interativas e outos materiais que o utilizador possa ver no Serviço, aceder através do Serviço ou contribuir para o Serviço.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '2. Aceitação dos Termos 2.1. Para poder utilizar o Serviço, o utilizador deve primeiro aceitar os Termos. O utilizador não pode utilizar o Serviço sem aceitar os Termos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '2.2 O utilizador pode aceitar os Termos através da mera utilização do Serviço. O utilizador reconhece e aceita que, a partir desse momento, o YouTube tratará a utilização do Serviço como uma aceitação dos Termos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '2.3 O utilizador não pode utilizar o Serviço nem aceitar os Termos caso (a) não tenha idade suficiente para celebrar um contrato vinculativo com o YouTube, ou (b) seja uma pessoa que esteja impedida ou legalmente proibida de receber ou utilizar o Serviço nos termos da lei do país em que reside ou a partir do qual acede ou utiliza o Serviço.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '2.4 O utilizador deve imprimir ou gravar uma cópia dos Termos para seu arquivo.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '3. Alterações aos Termos O YouTube reserva-se o direito de alterar o disposto nos Termos, para, por exemplo, refletir alterações legislativas ou regulatórias ou alterações às funcionalidades oferecidas através do Serviço. O utilizador deve por isso consultar regularmente os Termos por forma a acompanhar tais alterações. A versão alterada dos Termos (os “Termos Alterados”) serão publicados em https://www.youtube.pt/t/terms ou disponibilizados no âmbito do Serviço (para quaisquer termos adicionais modificados). Caso o utilizador não concorde com os Termos Alterados deve cessar a utilização do Serviço. A continuação da utilização do Serviço pelo utilizador após a data em que os Termos Alterados são publicados corresponde à aceitação pelo utilizador dos Termos Alterados.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '4. Contas YouTube 4.1 Por forma a aceder a algumas funcionalidades do Website ou outros elementos do Serviço, o utilizador terá de criar uma conta YouTube. Aquando da criação da sua conta, o utilizador deve fornecer informação precisa e completa. É importante que o utilizador mantenha a palavra-chave da sua conta YouTube segura e confidencial.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '4.2 O utilizador deve notificar imediatamente o YouTube no caso de tomar conhecimento de uma quebra de segurança ou utilização não autorizada da sua conta YouTube.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '4.3 O utilizador reconhece que será o único responsável (perante o YouTube e perante terceiros) por toda a atividade que ocorra na sua conta YouTube.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '5. Restrições gerais à utilização 5.1 O YouTube concede ao utilizador, pelos presentes Termos, autorização para aceder e utilizar o Serviço, sujeito às seguintes regras, e o utilizador reconhece que o desrespeito de qualquer uma destas regras constituirá um incumprimento destes Termos por parte do utilizador:',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'A. o utilizador não pode distribuir qualquer parte ou partes do Website ou do Serviço, incluindo, sem limitação, quaisquer Conteúdos, através de qualquer meio sem a autorização prévia por escrito do YouTube, exceto se o YouTube disponibilizar os meios para tal distribuição através de uma funcionalidade oferecida pelo Serviço (tal como o YouTube Player);',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'B. o utilizador não pode alterar ou modificar qualquer parte do Website ou do Serviço (incluindo, sem limitação, o YouTube Player e tecnologias relacionadas);',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'C. o utilizador não pode aceder a Conteúdos através de qualquer tecnologia ou meios que não as páginas de reprodução de vídeos do próprio Website, o YouTube Player, ou outros meios que o YouTube explicitamente designe para o efeito;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'D. o utilizador não pode (nem pode tentar) neutralizar, desativar ou de qualquer outra forma interferir com quaisquer funcionalidades relativas à segurança do Serviço ou funcionalidades que (i) impeçam ou restrinjam o uso ou a cópia de Conteúdos ou (ii) imponham limitações à utilização do Serviço ou de conteúdos acessíveis através do Serviço;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'E. o utilizador não pode utilizar o Serviço (incluindo o YouTube Player) para qualquer um dos seguintes usos comerciais, exceto com a autorização prévia por escrito do YouTube:',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body: 'i. venda de acesso ao Serviço;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'ii. venda de publicidade, patrocínios ou promoções colocados no Serviço ou em Conteúdos;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'iii. venda de publicidade, patrocínios ou promoções em qualquer página de um blog ou website que permita publicidade e que contenha Conteúdos fornecidos através do Serviço, salvo se outros materiais não obtidos através do YouTube forem disponibilizados na mesma página e sejam de valor suficiente para servir de base a tais vendas;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'F. usos comerciais proibidos não incluem (i) o upload de um vídeo original no YouTube, (ii) a manutenção de um canal original no Website para promover um negócio ou iniciativa artística, (iii) a exibição de vídeos YouTube através do YouTube Player ou de outra forma num blog ou website que permita publicidade, sem prejuízo das restrições de publicidade dispostas em 5.1(E)(iii) acima; e (iv) qualquer uso que seja expressamente autorizado por escrito pelo YouTube;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'G. caso o utilizador utilize o YouTube Player no seu website, o mesmo não pode alterar, construir sobre ou bloquear qualquer parte ou funcionalidade do YouTube Player incluindo, sem limitação, os links para o Website;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'H. o utilizador não pode utilizar ou lançar qualquer sistema automatizado (incluindo, sem limitação, qualquer robot, spider ou offline reader) que aceda ao Serviço de uma forma que envie para os servidores YouTube, em determinado período de tempo, mais mensagens de pedido (request messages) do que um humano possa razoavelmente produzir no mesmo período através do uso de um web browser standard (isto é, não modificado) publicamente disponível;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'I. o utilizador não pode recolher quaisquer dados pessoais de qualquer utilizador do Website ou do Serviço (e reconhece que os dados pessoais incluem nomes de conta YouTube);',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'J. o utilizador não pode utilizar o Website ou os Serviços (incluindo as funcionalidades de comentários e de e-mail) para solicitar/enviar convites para negócios no âmbito de atividades comerciais ou relacionadas com iniciativas comerciais;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'K. o utilizador não pode abordar, para fins comerciais, qualquer utilizador do Website em relação aos seus Conteúdos; e',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'L. o utilizador não pode aceder aos Conteúdos para quaisquer fins que não sejam para a sua utilização pessoal e não comercial, exclusivamente conforme o pretendido e permitido pela funcionalidade normal do Serviço, e unicamente para streaming. “Streaming” significa uma transmissão digital contemporânea de material pelo YouTube através da Internet para um dispositivo operado por um utilizador com acesso à Internet, em que os dados se destinam à visualização em tempo real e não ao download (seja permanente ou temporário), cópia, armazenamento ou redistribuição pelo utilizador.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'M. o utilizador não deve copiar, reproduzir, distribuir, transmitir, difundir, exibir, vender, licenciar ou de qualquer outra forma explorar quaisquer Conteúdos para quaisquer outros fins sem o consentimento prévio por escrito do YouTube ou dos respetivos licenciadores dos Conteúdos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '5.2 O utilizador declara que cumprirá todas as outras regras dos Termos e das Orientações da Comunidade YouTube a todo o momento durante a sua utilização do Serviço.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '5.3 O YouTube concede aos operadores de motores públicos de busca autorização para o uso de spiders para copiar materiais do site exclusivamente para fins de criação de índices pesquisáveis e publicamente disponíveis dos materiais, mas não caches ou arquivos de tais materiais. O YouTube reserva-se o direito de revogar estas exceções quer de forma geral quer em casos específicos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '5.4 O YouTube está constantemente a inovar por forma a oferecer a melhor experiência possível aos seus utilizadores. O utilizador reconhece e concorda que a forma e natureza do Serviço prestado pelo YouTube poderá sofrer alterações sem aviso prévio ao utilizador.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '5.5 Como parte desta contínua inovação, o utilizador reconhece e aceita que o YouTube pode deixar (permanente ou temporariamente) de prestar o Serviço (ou quaisquer funcionalidades do Serviço) ao utilizador ou aos utilizadores em geral, a seu exclusivo critério e sem aviso prévio ao utilizador. O utilizador pode deixar de usar o Serviço a qualquer momento. O utilizador não é obrigado a informar o YouTube quando deixa de utilizar o Serviço.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '5.6 O utilizador reconhece que é o único responsável (e que o YouTube não tem qualquer responsabilidade perante o utilizador ou perante qualquer terceiro) por qualquer incumprimento das suas obrigações decorrentes dos Termos e pelas consequências (incluindo quaisquer perdas ou danos que o YouTube possa sofrer) de tal incumprimento.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '6. Política de direitos de autor \n 6.1 O YouTube tem uma política de direitos de autor clara relativamente a quaisquer Conteúdos que alegadamente violem os direitos de autor de um terceiro. Os detalhes desta política podem ser consultados aqui: https://www.youtube.pt/t/copyright_notice.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '6.2 Como parte da política de direitos de autor do YouTube, o YouTube fará cessar o acesso ao Serviço de um utilizador caso tal utilizador seja considerado um infrator reincidente. Um infrator reincidente é um utilizador que tenha sido notificado por atividades infratoras mais do que duas vezes.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '7. Conteúdos \n 7.1 Enquanto titular de uma conta YouTube, o utilizador poderá submeter Conteúdos. O utilizador compreende que independentemente de os Conteúdos serem publicados, o YouTube não garante qualquer confidencialidade relativamente aos mesmos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '7.2 O utilizador retém todos os seus direitos sobre os seus Conteúdos, mas é obrigado a conceder uma licença limitada ao YouTube e a outros utilizadores do Serviço. Esta licença é descrita na cláusula 8 dos presentes Termos (Licença concedida pelo utilizador).',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '7.3 O utilizador reconhece e aceita que é o único responsável pelos seus Conteúdos e pelas consequências da sua disponibilização ou publicação. O YouTube não apoia quaisquer Conteúdos ou qualquer opinião, recomendação ou conselho expresso nos mesmos, afastando expressamente qualquer responsabilidade relativamente aos Conteúdos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '7.4 O utilizador declara e garante que tem (e que continuará a ter durante a sua utilização do Serviço) todas as licenças, direitos, consentimentos e autorizações necessárias para permitir ao YouTube utilizar os seus Conteúdos para efeitos de prestação do Serviço e, em geral, para utilizar os mesmos da forma contemplada pelo Serviço e pelos presentes Termos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '7.5 O utilizador concorda que a sua conduta no site deve respeitar (e que o conteúdo de todos os seus Conteúdos devem respeitar) as Orientações da Comunidade YouTube, disponíveis em https://www.youtube.pt/t/community_guidelines, conforme atualizadas.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '7.7 O utilizador aceita e declara que os Conteúdos que submete no Serviço não contêm qualquer material protegido por direitos de autor de terceiros, ou material que esteja sujeito a outros direitos de terceiro (incluindo direitos de privacidade ou publicidade), exceto se tiver uma licença ou autorização formal do legítimo titular, ou esteja de outra forma legalmente autorizado a disponibilizar o material em causa e a conceder ao YouTube a licença referida na Cláusula 8.1 abaixo.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '7.8 Após conhecimento de qualquer potencial violação dos presentes Termos, o YouTube reserva-se o direito (mas não terá a obrigação) de decidir se os Conteúdos cumprem os requisitos constantes destes Termos e poderá a qualquer momento remover tais Conteúdos e/ou fazer cessar o acesso de um utilizador ao Serviço por disponibilizar Conteúdos que violem os presentes Termos, sem aviso prévio e a seu exclusivo critério.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '7.9 O utilizador compreende e reconhece ainda que, ao utilizar o Serviço, pode estar exposto a Conteúdos que sejam factualmente incorretos, ofensivos, indecentes ou de outra forma censuráveis para o utilizador. O utilizador concorda em renunciar, e pelos presentes Termos renuncia, a quaisquer direitos ou recursos legais ou outros que tenha ou possa ter contra o YouTube relativamente a tais Conteúdos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '8. Licença concedida pelo utilizador \n 8.1 Quando faz o upload ou disponibiliza Conteúdos no YouTube, o utilizador concede:',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'A. ao YouTube, uma licença mundial, não exclusiva, não remunerada, transmissível (com direito a sublicenciar) para utilizar, reproduzir, distribuir, preparar obras derivadas, exibir e executar tais Conteúdos no âmbito da prestação do Serviço e, em geral, no âmbito da atividade do YouTube, incluindo, sem limitação, para a promoção e redistribuição de parte ou todo o Serviço (e obras derivadas do mesmo) em qualquer formato e através de quaisquer canais;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'B. a cada utilizador do Serviço, uma licença mundial, não exclusiva e não remunerada para aceder aos seus Conteúdos através do Serviço, e para utilizar, reproduzir, distribuir, preparar obras derivadas, exibir e executar tais Conteúdos na medida permitida pela funcionalidade do Serviço e pelos presentes Termos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '8.2 As licenças referidas acima concedidas pelo utilizador em relação aos Conteúdos terminam quando o utilizador remove ou apaga os seus Conteúdos do Website. As licenças referidas acima concedidas pelo utilizador em relação a comentários de texto submetidos como Conteúdos são perpétuas e irrevogáveis, sem prejuízo dos seus direitos de propriedade sobre os mesmos, que são do utilizador de acordo com o disposto na cláusula 7.2 acima.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '9. Conteúdos do YouTube no Website \n Com exceção dos Conteúdos submetidos no Serviço pelo utilizador, todos os outros Conteúdos disponibilizados no Serviço são detidos ou licenciados ao YouTube, e estão sujeitos a direitos de autor, marca e outros direitos de propriedade intelectual do YouTube ou dos licenciadores do YouTube. Quaisquer marcas de terceiros presentes nos Conteúdos não carregados (upload) ou disponibilizados pelo utilizador são marcas dos respetivos titulares. Tais Conteúdos não podem ser objeto de download, copiados, reproduzidos, distribuídos, transmitidos, difundidos, exibidos, vendidos, licenciados ou de qualquer outra forma explorados para qualquer outro fim sem o prévio consentimento por escrito do YouTube ou, onde aplicável, dos licenciadores do YouTube. O YouTube e os seus licenciadores reservam-se todos os direitos não expressamente concedidos relativamente aos seus Conteúdos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '10. Links a partir do YouTube \n 10.1 O Serviço pode incluir hyperlinks para outros websites que não sejam detidos ou controlados pelo YouTube. O YouTube não tem controlo sobre, e não assume qualquer responsabilidade pelos conteúdos, políticas de privacidade ou práticas de quaisquer websites de terceiros.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '10.2 O utilizador reconhece e aceita que o YouTube não é responsável pela disponibilização de tais sites ou recursos externos, e não apoia qualquer publicidade, produtos ou outros materiais disponíveis nos ou a partir de tais websites ou recursos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '10.3 O utilizador reconhece e concorda que o YouTube não é responsável por qualquer perda ou dano que o utilizador possa sofrer na sequência da disponibilização de tais sites ou recursos externos, ou pelo facto de o utilizador ter depositado qualquer confiança na completude, precisão ou existência de qualquer publicidade, produtos ou outros materiais disponíveis em ou a partir de tais websites ou recursos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '10.4 O YouTube recomenda ao utilizador que seja cauteloso quando deixe o Serviço e que leia os termos e condições e política de privacidade dos outros websites que visite.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '11. Fim da relação com o YouTube \n 11.1 Os Termos continuar-se-ão a aplicar até que sejam terminados pelo utilizador ou pelo YouTube conforme o disposto abaixo.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '11.2 Caso o utilizador queira terminar o seu acordo com o YouTube, poderá fazê-lo mediante (a) uma notificação ao YouTube em qualquer momento e (b) o encerramento da sua conta YouTube. A notificação do utilizador deve ser enviada, por escrito, para o endereço do YouTube indicado no início dos presentes Termos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '11.3 O YouTube pode terminar o acordo com o utilizador em qualquer momento caso:',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'A. o utilizador tenha violado qualquer disposição dos Termos (ou tenha agido de uma forma que demonstre claramente que não pretende, ou é incapaz de, cumprir as disposições dos Termos); ou',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'B. o YouTube seja obrigado a fazê-lo por lei (por exemplo, caso a prestação do Serviço ao utilizador seja, ou se torne, ilícita).',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body: '11.4 O YouTube poderá terminar o acordo com o utilizador caso:',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'A. o YouTube esteja em processo de deixar de prestar o Serviço a utilizadores no país em que o utilizador reside ou a partir do qual o utilizador usa o Serviço; ou',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'B. a prestação do Serviço ao utilizador pelo YouTube já não seja, na opinião do YouTube, comercialmente viável, dando, nos casos previstos em cada ponto A e B da presente Cláusula, e se possível, um aviso prévio de tal cessação.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '11.5 Após a cessação dos presentes Termos, todos os direitos, obrigações e responsabilidades de que o utilizador e o YouTube tenham beneficiado, ou a que tenham sido sujeitos (ou que tenham acumulado ao longo do tempo em que os Termos vigoraram) ou que sejam indicados expressamente como devendo permanecer por tempo indeterminado, não serão afetados por tal cessação, e as disposições da cláusula 14.6 continuar-se-ão a aplicar a tais direitos, obrigações e responsabilidades por tempo indeterminado.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '12. Exclusão de Garantias \n 12.1 Nada nos presentes Termos deve afetar quaisquer direitos legais de que o utilizador beneficie enquanto consumidor e a que não pode renunciar ou alterar por via contratual.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '12.2 O Serviço é prestado “as is” (“tal como está”) e o YouTube não presta ao utilizador qualquer garantia em relação ao mesmo.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '12.3 Em particular, o YouTube não declara ou garante ao utilizador que:',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body: 'A. a sua utilização do Serviço preencha as suas necessidades,',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'B. a sua utilização do Serviço seja ininterrupta, atempada, segura ou livre de erros,',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'C. qualquer informação obtida pelo utilizador em resultado da sua utilização seja precisa ou fiável, e',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'D. os defeitos na operação ou funcionalidade de qualquer software disponibilizado como parte do Serviço sejam corrigidos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '12.4 Não se aplicam ao Serviço mais nenhumas condições, garantias ou outros termos (incluindo quaisquer termos implícitos a respeito da qualidade, adequação a fins ou conformidade com a sua descrição) exceto na medida em que estejam expressamente previstos nos Termos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '13. Limitação de Responsabilidade \n 13.1 Nada nos presentes Termos exclui ou limita a responsabilidade do YouTube quando a mesma não possa ser legalmente excluída ou limitada ao abrigo da lei aplicável.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'A. quaisquer danos indiretos ou consequenciais que o utilizador possa sofrer. Isto inclui (i) quaisquer lucros cessantes (sofridos quer direta quer indiretamente); qualquer perda de goodwill ou de reputação; (iii) qualquer perda de oportunidade; ou (iv) qualquer perda de dados sofrida pelo utilizador;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'B. qualquer perda ou dano que o utilizador possa sofrer em resultado de:',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'i. quaisquer expetativas do utilizador baseadas na completude, precisão ou existência de qualquer publicidade, ou em resultado de qualquer relação ou transação entre o utilizador e qualquer anunciante ou patrocinador cuja publicidade apareça no Serviço;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'ii. qualquer alteração que o YouTube possa fazer ao Serviço ou qualquer cessação, permanente ou temporária, da prestação do Serviço (ou de qualquer funcionalidade dentro do Serviço);',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'iii. a eliminação, corrupção ou não armazenamento de quaisquer Conteúdos e outros dados de comunicação mantidos ou transmitidos pelo ou através do uso do Serviço pelo utilizador;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'iv. o não fornecimento pelo utilizador de informação de conta correta;',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          'v. o utilizador não manter a sua palavra-chave ou detalhes da conta YouTube seguros e confidenciais.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '13.3 As limitações à responsabilidade do YouTube previstas na cláusula 13.2 acima aplicar-se-ão independentemente de o YouTube ter sido avisado ou dever ter tido conhecimento da possibilidade de tais danos ocorrerem.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '14. Disposições gerais \n 14.1 Os Termos constituem o acordo integral entre o utilizador e o YouTube e regulam o uso do Serviço pelo utilizador, substituindo por completo quaisquer acordos prévios entre o utilizador e o YouTube relativamente ao Serviço. Quaisquer outros termos de utilização que a Google Inc. e qualquer uma das suas subsidiárias possam implementar ou ter em vigor são expressamente excluídas dos Termos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '14.2 O utilizador concorda que o YouTube possa enviar notificações ao utilizador, incluindo relativamente a alterações aos Termos, mediante e-mail, correio ou no Serviço.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '14.3 O utilizador concorda que o não exercício de qualquer direito ou via de ação previsto nos Termos (ou de que o YouTube beneficie ao abrigo de qualquer lei aplicável) não deve ser considerado como uma renúncia aos direitos ou vias de ação por parte do YouTube e que tais direitos ou vias de ação permanecerão disponíveis ao YouTube.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '14.4 Caso qualquer tribunal, com competência para conhecer da matéria, decida que qualquer disposição dos presentes Termos é inválida, tal disposição será retirada dos Termos, sem afetar as restantes. As restantes disposições dos Termos continuarão a ser válidas e passíveis de execução.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '14.5 O utilizador reconhece e aceita que cada membro do grupo de empresas em que o YouTube se insere será um terceiro beneficiário dos Termos e que tais empresas terão o direito de executar e invocar qualquer disposição dos Termos que confira um benefício ou um direito a seu favor. À exceção deste caso, mais nenhuma pessoa ou sociedade será terceira beneficiária destes Termos.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body:
          '14.6 Os Termos, e a relação entre o utilizador e o YouTube ao abrigo dos Termos, regem-se pela lei inglesa. Sem prejuízo de lei imperativa aplicável, o utilizador e o YouTube acordam fixar como exclusivamente competentes para julgar todas as questões emergentes dos Termos os tribunais de Inglaterra. Sem prejuízo do exposto, o utilizador concorda que o YouTube poderá intentar providências cautelares (ou outras formas de medidas judiciais urgentes) em qualquer jurisdição.',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      },
      {
        id: nextParagraphId(),
        body: 'Data: 24 de abril de 2013',
        up_vote: randomVotes(),
        down_vote: randomVotes()
      }
    ]
  }
}

export async function sampleDataGateway() {
  const services = await getSampleDataAsync()

  return { services }
}

const getSampleDataAsync = () => Promise.resolve(services)

export async function sampleParagraphsDataGateway(serviceId) {
  const { paragraphs = [], name = '' } = await getSampleParagraphsDataAsync(
    serviceId
  )

  return { paragraphs, name }
}

const getSampleParagraphsDataAsync = serviceId =>
  Promise.resolve(paragraphs[serviceId] || {})
