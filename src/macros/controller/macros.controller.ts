import { Controller } from '@nestjs/common';

@Controller('macros')
export class MacrosController {
  /*
    @Get('/list?:ingr')
  getMacros(@Query('ingr') ingr) {
    return this.macroService.getAllNutrients(ingr);
  }

  @Post(':ingr')
  async addMacros(
    @Param('ingr') macroIngr: string,
    @Body('name') macroTitle: string,
    @Body('totalWeight') macroWeight: number,
    @Body('dietLabels') macroLabels: [string],
    @Body('calorieQuantity') macroCalorieQuantity: number,
    @Body('proteinQuantity') macroProteinQuantity: number,
    @Body('carbQuantity') macroCarbQuantity: number,
    @Body('fatQuantity') macroFatQuantity: number,
    @Body('sugarQuantity') macroSugarQuantity: number,
  ) {
    const generatedId = await this.macroService.insertMacrosFromOneIngredient(
      macroIngr,
      macroTitle,
      macroWeight,
      macroLabels,
      macroCalorieQuantity,
      macroProteinQuantity,
      macroCarbQuantity,
      macroFatQuantity,
      macroSugarQuantity,
    );
    return { id: generatedId };
  }*/
  /*
  @UseGuards(JwtAuthGuard)
  @Post('macros/:id')
  async createMacros(
    @Param('id') id: number,
    @Request() req,
  ): Promise<MacroEntry> {
    const recipe = req.recipe;
    return await this.macroService.createMacros(recipe, id);
  }*/
}
