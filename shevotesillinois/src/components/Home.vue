<template>
    <div>
        <img src="./title_image.jpg"/>
        <b-jumbotron>
    <template v-slot:header>Who are we</template>

    <template v-slot:lead>
      She Votes Illinois is a statewide political action committee aimed at
         highlighting the importance of women’s voices in elections, government, and
          policymaking.
    </template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>

    <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button>
  </b-jumbotron>
  <b-jumbotron>
    <template v-slot:header>What we do</template>

    <template v-slot:lead>
      Our work focuses on three things: voting, education,
      and getting more women involved in politics. We are a grassroots team of
  Illinois women working to engage a new wave of voters, community members,
activists, and politicians.
    </template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>
    <b-row center>
            <b-col>
                <b-card
                    title="Voting"
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                  >
                    <b-card-text>
                        Some text
                    </b-card-text>

                    <b-button
                    squared variant="outline-secondary"
                    href="#">Go somewhere</b-button>
                  </b-card>
            </b-col>
            <b-col>
              <b-card
                title="Education"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Some Text
                </b-card-text>

                <b-button
                    squared variant="outline-secondary"
                    href="#">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col>
          <b-card
            title="Engagement"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Voting
            </b-card-text>
            <b-button
                    squared variant="outline-secondary"
                    href="#">Go somewhere</b-button>
          </b-card>
      </b-col>
      </b-row>

  </b-jumbotron>
        <b-jumbotron>
    <template v-slot:header>History</template>

    <template v-slot:lead>
      She Votes Illinois is a statewide political action committee aimed at
         highlighting the importance of women’s voices in elections, government, and
          policymaking.
    </template>

    <hr class="my-4">

    <p>
      It uses utility classes for typography and spacing to space content out within the larger
      container.
    </p>

    <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button>
  </b-jumbotron>
    </div>
</template>
