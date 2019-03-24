<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>

        <GridLayout>
            <Label class="info" horizontalAlignment="center" verticalAlignment="center">
                <FormattedString>
                    <Span class="fa" text.decode="&#xf135; "/>
                </FormattedString>
            </Label>
        </GridLayout>
    </Page>
</template>

<script>
    import * as http from 'http';

    export default {
        data: () => {
          return {
            pokemons: null
          }
        },
        mounted() {
            const api = 'https://pokeapi.co/api/v2/pokemon/'

            http.getJSON("https://pokeapi.co/api/v2/pokemon/?limit=151").then(result => {
                this.pokemons = result.results;
            }, error => {
                console.log(error);
            });
        },
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        },
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: $accent-dark;
    }

    .info {
        font-size: 20;
    }
</style>
